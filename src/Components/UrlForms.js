// src/components/UrlForm.js
import React from 'react';
import { TextField, Grid } from '@mui/material';

const UrlForm = ({ index, data, onChange }) => {
  return (
    <Grid container spacing={2} marginBottom={2}>
      <Grid item xs={12} md={6}>
        <TextField
          label="Original URL"
          variant="outlined"
          fullWidth
          value={data.url}
          onChange={(e) => onChange(index, 'url', e.target.value)}
        />
      </Grid>
      <Grid item xs={6} md={2}>
        <TextField
          label="Validity (min)"
          variant="outlined"
          fullWidth
          value={data.validity}
          onChange={(e) => onChange(index, 'validity', e.target.value)}
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField
          label="Custom Shortcode"
          variant="outlined"
          fullWidth
          value={data.code}
          onChange={(e) => onChange(index, 'code', e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default UrlForm;