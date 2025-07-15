import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { createShortUrl } from '../utils/shortener';
import { logEvent } from '../utils/loggerMiddleware';

const ShortenerPage = () => {
  const [urls, setUrls] = useState([{ url: '', code: '', validity: '' }]);
  const [results, setResults] = useState([]);

  const handleSubmit = () => {
    const res = [];
    for (let input of urls) {
      try {
        const { shortcode, originalUrl, expiresAt } = createShortUrl(
          input.url,
          parseInt(input.validity) || 30,
          input.code.trim() || ""
        );
        res.push({ shortcode, originalUrl, expiresAt });
        logEvent("shorten", { shortcode, originalUrl });
      } catch (e) {
        alert(e.message);
      }
    }
    setResults(res);
  };

  return (
    <Grid container spacing={2} padding={2}>
      <Typography variant="h4">URL Shortener</Typography>
      {urls.map((input, idx) => (
        <Grid container key={idx} spacing={1}>
          <Grid item xs={12} md={4}>
            <TextField label="Long URL" fullWidth value={input.url}
              onChange={e => {
                const copy = [...urls];
                copy[idx].url = e.target.value;
                setUrls(copy);
              }} />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField label="Validity (min)" fullWidth value={input.validity}
              onChange={e => {
                const copy = [...urls];
                copy[idx].validity = e.target.value;
                setUrls(copy);
              }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField label="Custom Shortcode" fullWidth value={input.code}
              onChange={e => {
                const copy = [...urls];
                copy[idx].code = e.target.value;
                setUrls(copy);
              }} />
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleSubmit}>Shorten</Button>
      </Grid>
      <Grid item xs={12}>
        {results.map(res => (
          <Typography key={res.shortcode}>
            Short URL: <a href={`/${res.shortcode}`}>http://localhost:3000/{res.shortcode}</a> | Expiry: {new Date(res.expiresAt).toLocaleString()}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default ShortenerPage;
