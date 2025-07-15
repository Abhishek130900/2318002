import React from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material';

const UrlStats = ({ shortcode, data }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">
          Short URL: <a href={`/${shortcode}`} target="_blank" rel="noreferrer">http://localhost:3000/{shortcode}</a>
        </Typography>
        <Typography>
          Original: {data.originalUrl}
        </Typography>
        <Typography>
          Created At: {new Date(data.createdAt).toLocaleString()}
        </Typography>
        <Typography>
          Expires At: {new Date(data.expiresAt).toLocaleString()}
        </Typography>
        <Typography>
          Total Clicks: {data.clicks.length}
        </Typography>
        <Divider sx={{ my: 1 }} />
        {data.clicks.map((click, index) => (
          <Typography key={index} variant="body2">
            {index + 1}. {click.timestamp} | Source: {click.source} | Geo: {click.geo}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default UrlStats;