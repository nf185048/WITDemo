import { Button, Grid, Typography } from '@mui/material'
import { FC } from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';

export const CheckoutButton: FC<{ price: string }> = ({
  price
}) => {
  return (
    <Button variant='contained'>
      <Grid container justifyContent='flex-start' alignItems='center'>
        <Grid item xs={1} paddingTop={0.5} marginRight={0.75}>
          <LocalMallIcon style={{ fill: '#FFFFFF' }} />
        </Grid>
        <Grid item xs={8.5} style={{ textAlign: 'left' }}>
          <Typography variant='h6' color='#FFFFFF'>
            Checkout
          </Typography>
        </Grid>
        <Grid item xs={1} >
          <Typography variant='h6' color='#FFFFFF'>{price}</Typography>
        </Grid>
      </Grid>
    </Button>
  )
}

