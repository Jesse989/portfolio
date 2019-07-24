import React from 'react';
import { Grid, Icon, Segment, Sidebar } from 'semantic-ui-react';
import { Link } from '@reach/router';

export default function Footer() {
  return (
    <Sidebar
      as={Segment}
      animation={'push'}
      direction={'bottom'}
      visible={true}
    >
      <Grid textAlign="center">
        <Grid columns={3} divided style={{ maxWidth: '456px' }}>
          <Grid.Column>
            <Link style={styles.link} to="/">
              <Icon size="large" name="id card outline" />
              About
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link style={styles.link} to="/portfolio">
              <Icon size="large" name="code" />
              Portfolio
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link style={styles.link} to="/contact">
              <Icon size="large" name="comment outline" />
              Contact
            </Link>
          </Grid.Column>
        </Grid>
      </Grid>
    </Sidebar>
  );
}

const styles = {
  link: {
    textDecoration: 'none',
    fontWeight: 700
  } as React.CSSProperties
};
