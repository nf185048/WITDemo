import type { NextPage } from 'next'
import { Divider, Stack, Typography, Link, Box } from '@mui/material'
import { Item, CheckoutButton } from '../components'

const Checkout: NextPage = () => {

  return (
    <Stack padding={1} maxWidth="390px">
      <Typography variant='h5'>Your Bag</Typography>

      <Box paddingBottom={2} paddingTop={2}>
        <Typography variant='body1' fontWeight='bold'>Little Tart Bakeshop</Typography>
        <Link variant='body1' fontWeight='bold'>2500 E Riverside Dr. 78704</Link>
        <Typography variant='subtitle2' fontWeight='light'>Ready for pickup in <b>15 minutes</b> </Typography>
      </Box>

      <Box paddingBottom={2} >
        {itemsToCheckout.map((checkoutItem, i) => {
          return (
            <Item
              key={i}
              id={checkoutItem.id}
              title={checkoutItem.title}
              desc={checkoutItem.description}
              price={`$${checkoutItem.price.toFixed(2)}`}
            />
          )
        })}
        <Divider />
      </Box>

      <CheckoutButton price={`$${calculatePrice()}`} />
    </Stack>
  )
}

const itemsToCheckout = [
  {
    id: 1,
    title: 'Iced Coffee',
    description: '16 oz, Oat Milk',
    price: 6.85
  },
  {
    id: 2,
    title: 'Slingshot Cold Brew Can',
    description: '12 oz',
    price: 4.35
  },
  {
    id: 3,
    title: 'Raspberry Hibiscus Morning Tea',
    description: '16 oz, Oat Milk',
    price: 4.00
  },
  {
    id: 4,
    title: 'Brew Dr. Kombucha',
    description: '14oz, Organic Island Mango',
    price: 2.50
  },
]

const calculatePrice = () => {
  let sum = 0

  itemsToCheckout.forEach(item => {
    sum = sum + item.price
  })

  /**
   * sum = 0
   * item.price (1) = 6.85
   * 
   * sum = 6.85
   * 
   * 
   * sum = 6.85
   * item.price (2) = 4.35
   * 
   * sum = sum + 4.35 = 6.85 + 4.35 = 11.20
   * 
   * sum = sum + price 
   */

  return sum.toFixed(2)
}

export default Checkout
