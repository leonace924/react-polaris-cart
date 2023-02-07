import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Avatar,
  ResourceItem,
  Inline,
  Card,
  Filters,
  Spinner,
  ResourceList,
  Text,
} from '@shopify/polaris'
import { useAxios } from 'hooks'

export const ProductList = () => {
  const [apiUrl, setAPIUrl] = useState('/products')
  const [queryValue, setQueryValue] = useState('')
  const [sortValue, setSortValue] = useState('ASC')

  const { data, isLoading, error } = useAxios({
    method: 'get',
    url: apiUrl,
  })

  useEffect(() => {
    setAPIUrl('/products')
  }, [])

  useEffect(() => {
    setAPIUrl(`/products?sort=${sortValue.toLowerCase()}`)
  }, [sortValue])

  const filteredItems = useMemo(() => {
    if (!data || !data?.length) return []

    return data.filter((item) => item?.title?.includes(queryValue))
  }, [queryValue, data])

  const renderItem = ({
    id,
    title,
    price,
    description,
    image: imageUrl,
    rating,
  }) => {
    const media = (
      <Avatar customer size="medium" name={title} source={imageUrl} />
    )

    return (
      <ResourceItem
        id={id}
        key={id}
        // url={url}
        media={media}
        accessibilityLabel={`View details for ${title}`}
      >
        <Inline>
          <Text variant="bodyLg" fontWeight="bold" as="h3">
            {title}
          </Text>
          <div>
            <Text variant="bodyMd" as="p">
              {description}
            </Text>
          </div>

          <Text variant="bodyLg" fontWeight="bold" as="p">
            ${price}
          </Text>
          <Text variant="bodyMd" as="p">
            Rating {rating.rate}
          </Text>
        </Inline>
      </ResourceItem>
    )
  }

  const handleFiltersQueryChange = useCallback((value) => {
    setQueryValue(value)
  }, [])

  const handleQueryValueRemove = useCallback(() => setQueryValue(''), [])

  const handleClearAll = useCallback(() => {
    handleQueryValueRemove()
  }, [handleQueryValueRemove])

  if (isLoading & !data)
    return (
      <Spinner accessibilityLabel="Loading Products Spinner" size="small" />
    )

  if (error) return <Text>Something went wrong.</Text>
  if (!data || !data?.length) return <Text>No products</Text>

  return (
    <Card>
      <ResourceList
        resourceName={{ singular: 'product', plural: 'products' }}
        items={filteredItems}
        renderItem={renderItem}
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
          { label: 'Ascending', value: 'ASC' },
          { label: 'Descending', value: 'DESC' },
        ]}
        onSortChange={(selected) => {
          setSortValue(selected)
          console.log(`Sort option changed to ${selected}.`)
        }}
        loading={isLoading}
      />
    </Card>
  )
}
