import {
  Card,
  ResourceList,
  Avatar,
  ResourceItem,
  Text,
} from '@shopify/polaris'

const PLPPage = () => {
  return (
    <div className=" text-rose-800">
      <div>PLP Page</div>

      <Card>
        <ResourceList
          resourceName={{ singular: 'customer', plural: 'customers' }}
          items={[
            {
              id: 100,
              url: 'customers/341',
              name: 'Mae Jemison',
              location: 'Decatur, USA',
            },
            {
              id: 200,
              url: 'customers/256',
              name: 'Ellen Ochoa',
              location: 'Los Angeles, USA',
            },
          ]}
          renderItem={(item) => {
            const { id, url, name, location } = item
            const media = <Avatar customer size="medium" name={name} />

            return (
              <ResourceItem
                id={id}
                url={url}
                media={media}
                accessibilityLabel={`View details for ${name}`}
              >
                <Text variant="bodyMd" fontWeight="bold" as="h3">
                  {name}
                </Text>
                <div>{location}</div>
              </ResourceItem>
            )
          }}
        />
      </Card>
    </div>
  )
}

export default PLPPage
