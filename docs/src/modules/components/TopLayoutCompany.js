import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import Head from 'docs/src/modules/components/Head';
import AppFrame from 'docs/src/modules/components/AppFrame';
import { BANNER_HEIGHT } from 'docs/src/modules/constants';
import AppContainer from 'docs/src/modules/components/AppContainer';
import AppFooter from 'docs/src/modules/components/AppFooter';
import MarkdownElement from './MarkdownElement';

const styles = (theme) => ({
  root: {
    flex: '1 0 100%',
    // Adding top buffer because of the v5 banner
    marginTop: BANNER_HEIGHT,
  },
  container: {
    marginBottom: theme.spacing(20),
    maxWidth: `calc(680px + ${theme.spacing(12)})`,
    '& .markdownElement': {
      [theme.breakpoints.up('md')]: {
        paddingRight: theme.spacing(4),
      },
    },
  },
});

function TopLayoutCompany(props) {
  const { classes, docs } = props;
  const { description, rendered, title } = docs.en;

  return (
    <AppFrame disableDrawer>
      <Head title={`${title} - MUI`} description={description} />
      <div className={classes.root}>
        <AppContainer component="main" className={classes.container}>
          {rendered.map((chunk, index) => {
            return <MarkdownElement key={index} renderedMarkdown={chunk} />;
          })}
        </AppContainer>
        <AppFooter />
      </div>
    </AppFrame>
  );
}

TopLayoutCompany.propTypes = {
  classes: PropTypes.object.isRequired,
  docs: PropTypes.object.isRequired,
};

const defaultTheme = createTheme();
export default withStyles(styles, { defaultTheme })(TopLayoutCompany);
