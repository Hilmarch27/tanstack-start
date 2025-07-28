import { getRouteApi } from '@tanstack/react-router'
import type {
  RegisteredRouter,
  RouteIds,
  SearchParamOptions,
} from '@tanstack/react-router'

type Filters<T> = Partial<T>

function cleanEmptyParams<T extends Record<string, unknown>>(search: T) {
  const newSearch = { ...search }
  Object.keys(newSearch).forEach((key) => {
    const value = newSearch[key]
    if (
      value === undefined ||
      value === '' ||
      (typeof value === 'number' && isNaN(value))
    )
      delete newSearch[key]
  })

  return newSearch
}

function useFilters<
  TId extends RouteIds<RegisteredRouter['routeTree']>,
  TSearchParams extends SearchParamOptions<
    RegisteredRouter,
    TId,
    TId
  >['search'],
>(routeId: TId) {
  const routeApi = getRouteApi<TId>(routeId)
  const navigate = routeApi.useNavigate()
  const filters = routeApi.useSearch()

  const setFilters = (partialFilters: Partial<TSearchParams>) =>
    navigate({
      search: cleanEmptyParams({
        ...filters,
        ...partialFilters,
      }) as TSearchParams,
    })

  const resetFilters = () => navigate({ search: {} as TSearchParams })

  return { filters, setFilters, resetFilters }
}

export { useFilters }
export type { Filters }
