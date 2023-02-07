import { useCallback, useState } from 'react'
import { Card, Filters, ResourceList, Spinner, Text } from '@shopify/polaris'
import { ProductItem } from 'components/ProductItem'
import { useAxios } from 'hooks'

export const ProductList = () => {
  const [queryValue, setQueryValue] = useState('')
  const [sortValue, setSortValue] = useState('DATE_MODIFIED_DESC')

  const { data, isLoading, error } = useAxios({
    method: 'get',
    url: '/products',
  })

  const handleFiltersQueryChange = useCallback((value) => {
    setQueryValue(value)
  }, [])

  const handleQueryValueRemove = useCallback(() => setQueryValue(''), [])

  const handleClearAll = useCallback(() => {
    handleQueryValueRemove()
  }, [handleQueryValueRemove])

  if (isLoading)
    return (
      <Spinner accessibilityLabel="Loading Products Spinner" size="small" />
    )

  if (error) return <Text>Something went wrong.</Text>
  if (!data || !data?.length) return <Text>No products</Text>

  return (
    <Card>
      <ResourceList
        resourceName={{ singular: 'product', plural: 'products' }}
        items={data}
        renderItem={(item) => <ProductItem {...item} />}
        filterControl={
          <Filters
            queryValue={queryValue}
            filters={[]}
            // appliedFilters={appliedFilters}
            onQueryChange={handleFiltersQueryChange}
            onQueryClear={handleQueryValueRemove}
            onClearAll={handleClearAll}
          />
        }
        sortValue={sortValue}
        sortOptions={[
          { label: 'Newest update', value: 'DATE_MODIFIED_DESC' },
          { label: 'Oldest update', value: 'DATE_MODIFIED_ASC' },
        ]}
        onSortChange={(selected) => {
          setSortValue(selected)
          console.log(`Sort option changed to ${selected}.`)
        }}
      />
    </Card>
  )
}
