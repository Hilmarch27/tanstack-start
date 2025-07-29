import { HomeIcon } from 'lucide-react'
import { Link, getRouteApi, useLocation } from '@tanstack/react-router'
import type React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface AutoBreadcrumbProps {
  homeElement?: React.ReactNode
  separator?: React.ReactNode
  capitalizeLinks?: boolean
  showParams?: boolean
  excludeParams?: Array<string>
  maxParamsDisplay?: number
}

export function AutoBreadcrumb({
  homeElement,
  separator,
  capitalizeLinks = true,
  showParams = true,
  excludeParams = [],
  maxParamsDisplay = 3,
}: AutoBreadcrumbProps) {
  const apiRoute = getRouteApi('/_admin')

  const pathname = useLocation({ select: (location) => location.href })
  const searchParams = apiRoute.useSearch()

  // Split pathname into segments and filter out empty strings
  const pathSegments = pathname.split('/').filter((segment) => segment !== '')

  // Convert search object to URLSearchParams-like entries
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const paramEntries = searchParams
    ? Object.entries(searchParams)
        .filter(([key]) => !excludeParams.includes(key))
        .slice(0, maxParamsDisplay)
    : []

  // Function to format segment names
  const formatSegment = (segment: string) => {
    if (!capitalizeLinks) return segment
    // Replace hyphens and underscores with spaces, then capitalize
    return segment
      .replace(/[-_]/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  // Function to format parameter value
  const formatParamValue = (value: any) => {
    const stringValue = String(value)
    if (stringValue.length > 20) {
      return `${stringValue.substring(0, 20)}...`
    }
    return stringValue
  }

  // Build breadcrumb items
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`
    const isLast = index === pathSegments.length - 1
    const label = formatSegment(segment)

    return {
      href,
      label,
      isLast: isLast && paramEntries.length === 0, // Only last if no params to show
    }
  })

  // Add parameter items if showParams is true and there are parameters
  const paramItems =
    showParams && paramEntries.length > 0
      ? paramEntries.map(([key, value], index) => ({
          label: `${formatSegment(key)}: ${formatParamValue(value)}`,
          isLast: index === paramEntries.length - 1,
          isParam: true,
        }))
      : []

  // Don't render if we're on the home page and no params
  if (pathSegments.length === 0 && paramItems.length === 0) {
    return null
  }
  return (
    <Breadcrumb className="hidden sm:flex">
      <BreadcrumbList className="gap-1 sm:gap-1">
        {/* Home link */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/dashboard" className="flex items-center gap-1">
              {homeElement || (
                <>
                  <HomeIcon className="size-4" />
                  <span>Home</span>
                </>
              )}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Dynamic breadcrumb items */}
        {breadcrumbItems.map((item) => (
          <div key={item.href} className="flex items-center">
            <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
            <BreadcrumbItem>
              {item.isLast ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}

        {/* Parameter items */}
        {paramItems.map((item, index) => (
          <div key={`param-${index}`} className="flex items-center">
            <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-blue-600 font-medium">
                {item.label}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
