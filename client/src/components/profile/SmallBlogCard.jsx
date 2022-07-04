import React from 'react';

// libraries
import { CardMedia, Link, CardContent, CardActionArea, Card, Grid, Typography } from '@mui/material';

const SmallBlogCard = ({ title, content, id, img, date, isSidebar = false }) => {
  return (
    <Grid item xs={12} md={12} sx={{ my: 2 }}>
      <CardActionArea>
        <Card sx={{ display: 'flex', backgroundColor: '#242629', flexDirection: isSidebar ? 'column-reverse' : 'row' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h6" sx={{ color: '#fffffe', fontSize: '20px' }} variant="h5">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#fffffe' }} color="text.secondary">
              {date}
            </Typography>
            <Typography variant="body2" sx={{ color: '#94a1b2' }}>
              {content}...
            </Typography>
            <Link style={{ textDecoration: 'none', color: '#7f5af0' }} href={`/${id}/article`}>
              <Typography variant="body2" sx={{}} color="primary">
                Continue...
              </Typography>
            </Link>
          </CardContent>
          <CardMedia component="img" sx={{ width: isSidebar ? '100%' : 160 }} image={`${img}`} alt="Post Title" />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default SmallBlogCard;
