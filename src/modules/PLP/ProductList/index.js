import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Avatar,
  Card,
  ChoiceList,
  ResourceItem,
  Filters,
  Spinner,
  ResourceList,
  Text,
} from '@shopify/polaris'
import { Product } from 'components/Common'
import { useAxios } from 'hooks'
import { disambiguateLabel, isEmpty } from 'helpers'
import { SORT_OPTIONS } from 'utils/constant'

export const ProductList = () => {
  const [apiUrl, setAPIUrl] = useState('/products')
  const [queryValue, setQueryValue] = useState('')
  const [sortValue, setSortValue] = useState('ASC')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const { data: categories } = useAxios({
    method: 'get',
    url: '/products/categories',
  })

  const { data, isLoading, error } = useAxios({
    method: 'get',
    url: apiUrl,
  })

  useEffect(() => {
    setAPIUrl('/products')
    setSortValue('ASC')
  }, [])

  useEffect(() => {
    const url = `/products${
      selectedCategory ? `/category/${selectedCategory}` : ''
    }?sort=${sortValue.toLowerCase()}`

    setAPIUrl(url)
  }, [selectedCategory, sortValue])

  const handleSortValueChange = useCallback((value) => {
    setSortValue(value)
  }, [])

  const handleFiltersQueryChange = useCallback((value) => {
    setQueryValue(value)
  }, [])

  const handleQueryValueRemove = useCallback(() => setQueryValue(''), [])

  const handleCategoryRemove = useCallback(() => setSelectedCategory(null), [])

  const handleClearAll = useCallback(() => {
    handleQueryValueRemove()
    handleCategoryRemove()
  }, [handleCategoryRemove, handleQueryValueRemove])

  const filters = [
    {
      key: 'category',
      label: 'Category',
      filter: (
        <ChoiceList
          title="Category"
          titleHidden
          choices={categories?.map((category) => ({
            label: category,
            value: category,
          }))}
          selected={selectedCategory || []}
          onChange={setSelectedCategory}
        />
      ),
      shortcut: true,
    },
  ]

  const appliedFilters = []
  if (!isEmpty(selectedCategory)) {
    const key = 'category'
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, selectedCategory),
      onRemove: handleCategoryRemove,
    })
  }

  const filteredItems = useMemo(() => {
    if (!data || !data?.length) return []

    return data.filter((item) =>
      item?.title.toLowerCase()?.includes(queryValue.toLowerCase()),
    )
  }, [queryValue, data])

  const renderItem = (item) => {
    const { id, title, image: imageUrl } = item
    const media = (
      <Avatar customer size="medium" name={title} source={imageUrl} />
    )

    return (
      <ResourceItem
        id={id}
        key={id}
        media={media}
        accessibilityLabel={`View details for ${title}`}
      >
        <Product product={item} />
      </ResourceItem>
    )
  }

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
        loading={isLoading}
        sortValue={sortValue}
        sortOptions={SORT_OPTIONS}
        onSortChange={handleSortValueChange}
        filterControl={
          <Filters
            queryValue={queryValue}
            filters={filters}
            appliedFilters={appliedFilters}
            onQueryChange={handleFiltersQueryChange}
            onQueryClear={handleQueryValueRemove}
            onClearAll={handleClearAll}
          />
        }
      />
    </Card>
  )
}
