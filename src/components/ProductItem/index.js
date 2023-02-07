import { Avatar, ResourceItem, Text, Inline } from '@shopify/polaris'

export const ProductItem = ({
  id,
  title,
  price,
  description,
  image: imageUrl,
  rating,
}) => {
  const media = <Avatar customer size="medium" name={title} source={imageUrl} />

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
