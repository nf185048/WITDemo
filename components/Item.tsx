import { Typography, Divider, Grid, Stack, Avatar } from '@mui/material'
import { FC } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const Item: FC<{ title: string, desc: string, price: string, id: number }> = ({
  title, price, desc, id
}) => {
  return (
    <Grid container item justifyContent='center' alignItems='center' spacing={4} paddingBottom={4} id={id.toString()} >
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={2}>
        <Avatar sx={{ bgcolor: "#EEEEEE" }}>
          <Typography style={{ color: "#474747", }} fontWeight='bold' variant='body1'>1x</Typography>
        </Avatar>
      </Grid>
      <Grid item xs={8} >
        <Typography variant='body1' fontWeight='bold' >{title}</Typography>
        {desc && <Typography color="#595959">{desc}</Typography>}
        <Typography>{price}</Typography>
      </Grid>
      <Grid item xs={2}>
        <DeleteIcon htmlColor='#4D4D4D' />
      </Grid>
    </Grid>
  )
}