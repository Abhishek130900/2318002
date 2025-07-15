import { Container, Typography } from '@mui/material';
import UrlStats from '../Components/UrlStats';

const StatsPage = () => {
  const allUrls = JSON.parse(localStorage.getItem('shortUrls') || '{}');

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        URL Statistics
      </Typography>
      {Object.entries(allUrls).map(([shortcode, data]) => (
        <UrlStats key={shortcode} shortcode={shortcode} data={data} />
      ))}
    </Container>
  );
};

export default StatsPage;
